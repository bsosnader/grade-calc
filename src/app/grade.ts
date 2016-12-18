export class Grade {
	cg: number;
	dg: number;
	fw: number;
  constructor(
    public currentGrade: number,
    public desiredGrade: number,
    public finalWeight: number,
  ) {  }
}