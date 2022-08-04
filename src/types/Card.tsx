export interface IPokemon {
  id: string;
  pic: string;
  name: string;
  type: string[];
  onClick?: () => void;
}
