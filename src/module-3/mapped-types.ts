const arrOfNum = [1, 2, 3, 4];
const arrOfStr = arrOfNum.map((num) => num.toString());

// -------------------------
// types

type AreaNum = {
  height: number;
  width: number;
};

type AreaStr = {
  height: string;
  width: string;
};

type AreaReadonly = {
  readonly height: number;
  readonly width: number;
};

type A = AreaNum["height"]; // look up types
type B = keyof AreaNum; // "width" | "height"

// -------------------------
// variables

const rectangularArea: AreaNum = {
  height: 10,
  width: 12,
};

rectangularArea.width = 10;

const rectangularArea2: AreaReadonly = {
  height: 10,
  width: 12,
};

// We had to repeat and change the type for string, number and readonly. But we avoid this with map

// -------------------------
// map

type VolumeType = {
  height: number;
  width: number;
  depth: number;
};

/* 
type A =  {
  [map] : type
}
*/

type VolumeTypeMapped1 = {
  [key in "height" | "width"]: number;
};

// making it more dynamic

type VolumeTypeMapped2 = {
  [key in keyof VolumeType]: number;
};

// much more dynamic with "look up" types + readonly

type VolumeTypeMapped3 = {
  readonly [key in keyof VolumeType]: VolumeType[key];
};

// making it generic

type VolumeTypeGeneric<T> = {
  [key in keyof T]: T[key];
};

type TestType = {
  height: boolean;
  area: number;
  other?: string;
};

const volume1: VolumeTypeGeneric<TestType> = {
  height: true,
  area: 100,
};

const volume2: VolumeTypeGeneric<VolumeType> = {
  height: 10,
  width: 10,
  depth: 10,
};
