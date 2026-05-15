export interface BCDMeasurements {
  bustCircumference: number;
  underbustCircumference: number;
  bustDepth: number;
  bustToBustDistance: number;
  dartIntake?: number;
  easeAllowance?: number;
}

export interface HHMeasurements {
  highHipCircumference: number;
  waistCircumference: number;
  riseAllowance?: number;
  fitEase?: number;
}

export interface BustToBustMeasurements {
  bustToBustDistance: number;
  bustPointDrop?: number;
  apexOffset?: number;
}

export interface DartPivot {
  x: number;
  y: number;
}

export interface BraBandAdjustment {
  bandSize: number;
  cutLength: number;
  finishedLength: number;
  easeApplied: number;
}

export interface BCDSizingResult {
  bandSize: number;
  cupSize: string;
  dartPivot: DartPivot;
  bustApex: DartPivot;
  braBand: BraBandAdjustment;
}

const CUP_SEQUENCE = ["AA", "A", "B", "C", "D", "DD", "DDD", "G", "H", "I", "J", "K"];

function roundToNearestEven(value: number): number {
  return Math.max(28, Math.round(value / 2) * 2);
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function toCupSize(diff: number): string {
  const index = clamp(Math.round(diff), 0, CUP_SEQUENCE.length - 1);
  return CUP_SEQUENCE[index] ?? CUP_SEQUENCE[CUP_SEQUENCE.length - 1];
}

export function computeDartPivot(measurements: BCDMeasurements): DartPivot {
  const horizontalShift = measurements.bustToBustDistance / 2;
  const verticalShift = measurements.bustDepth * 0.38 + (measurements.dartIntake ?? 0) * 0.12;

  return {
    x: Number(horizontalShift.toFixed(2)),
    y: Number(verticalShift.toFixed(2)),
  };
}

export function placeBustApex(measurements: BustToBustMeasurements): DartPivot {
  const x = measurements.bustToBustDistance / 2 + (measurements.apexOffset ?? 0);
  const y = measurements.bustPointDrop ?? 0;

  return {
    x: Number(x.toFixed(2)),
    y: Number(y.toFixed(2)),
  };
}

export function adjustBraBand(measurements: HHMeasurements & { underbustCircumference: number }): BraBandAdjustment {
  const easeApplied = measurements.fitEase ?? 2;
  const finishedLength = measurements.underbustCircumference + easeApplied;
  const bandSize = roundToNearestEven(finishedLength);
  const cutLength = finishedLength + (measurements.riseAllowance ?? 0);

  return {
    bandSize,
    cutLength: Number(cutLength.toFixed(2)),
    finishedLength: Number(finishedLength.toFixed(2)),
    easeApplied: Number(easeApplied.toFixed(2)),
  };
}

export function computeBCDSizing(measurements: BCDMeasurements): BCDSizingResult {
  const cupDifference = Math.max(0, measurements.bustCircumference - measurements.underbustCircumference) / 2;
  const bandSize = roundToNearestEven(measurements.underbustCircumference + (measurements.easeAllowance ?? 2));
  const bustApex = placeBustApex({
    bustToBustDistance: measurements.bustToBustDistance,
    bustPointDrop: measurements.bustDepth * 0.33,
    apexOffset: 0,
  });

  return {
    bandSize,
    cupSize: toCupSize(cupDifference),
    dartPivot: computeDartPivot(measurements),
    bustApex,
    braBand: adjustBraBand({
      highHipCircumference: measurements.underbustCircumference,
      waistCircumference: measurements.bustCircumference,
      underbustCircumference: measurements.underbustCircumference,
      fitEase: measurements.easeAllowance ?? 2,
    }),
  };
}
