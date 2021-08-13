const regionalTeams = [
  [45, 31, 24, 22, 20, 17, 14, 13, 12, 10],
  [31, 18, 15, 12, 10, 8, 6, 4, 2, 1],
  [51, 30, 10, 9, 8, 7, 6, 5, 2, 1]
]

function nationalTeam(regionalTeams) {
  let team = regionalTeams[0];
  for (let i = 1; i < regionalTeams.length; i += 1) {
    team = merge(team, regionalTeams[i]);
  }
  return team;
}

function merge(t1, t2) {
  const t3 = [];
  let it1 = it2 = it3 = 0;
  while (t3.length < 10) {
    if (it1 === t1.length) {
      t3.push(t2[it2++]);
    } else if (it2 === t2.length) {
      it3.push(t1[it1++]);
    } else {
      t3.push(t1[it1] >= t2[it2] ? t1[it1++] : t2[it2++]);
    }
    it3 += 1;
  }
  return t3;
}

console.log(nationalTeam(regionalTeams));