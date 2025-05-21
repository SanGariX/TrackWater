const dayliNorma = (object: any) => {
  if (!object.gender || !object.weight || !object.sports) return 1.5;
  if (!Number(object.weight) || Number(object.weight) > 140) return 1.5;
  if (!Number(object.sports) || Number(object.sports) > 15) return 1.5;
  if (object.gender === "Woman") {
    return Number(object.weight) * 0.03 + Number(object.sports) * 0.4;
  }
  if (object.gender === "Man") {
    return Number(object.weight) * 0.04 + Number(object.sports) * 0.6;
  }
  return 1.5;
};
export default dayliNorma;

