export const GAS_TYPES = ["gasoline", "electric"] as const;

export type GasType = (typeof GAS_TYPES)[number];

export interface CarInterface {
    name: string;
    color: string;
    gas: GasType;
    year: number;
    description: string;
    price: number;
}