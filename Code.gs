/**
 * Find the index of last 4 or 5 star wish.
 *
 * @param {wishes} input Range of wishes.
 * @param {star5} input Range of 5 stars.
 * @param {star4} input Range of 4 stars.
 * @return Index of first match.
 * @customfunction
 */
function PITY4(wishes, star5, star4) {
  if (typeof wishes == "string") {
    if (included(wishes, star4) || included(wishes, star5)) {
      return 0;
    } else {
      return 1;
    }
  }

  cWishes = wishes.filter(x => x[0]);

  for (let i = cWishes.length - 1; i >= 0; i--) {
    if (included(cWishes[i][0], star4) || included(cWishes[i][0], star5)) {
      return cWishes.length - 1 - i;
    }
  }

  return cWishes.length;
}

/**
 * Find the index of last 5 star wish.
 *
 * @param {wishes} input Range of wishes.
 * @param {star5} input Range of 5 stars.
 * @return Index of first match.
 * @customfunction
 */
function PITY5(wishes, star5) {
  if (typeof wishes == "string") {
    if (included(wishes, star5)) {
      return 0;
    } else {
      return 1;
    }
  }

  let cWishes = wishes.filter(x => x[0]);

  for (let i = cWishes.length - 1; i >= 0; i--) {
    if (included(cWishes[i][0], star5)) {
      return cWishes.length - 1 - i;
    }
  }

  return cWishes.length;
}

/**
 * Find the average pulls of a rarity.
 *
 * @param {wishes} input Range of wishes.
 * @param {star} input Range of rarity.
 * @return Average.
 * @customfunction
 */
function AVERAGEPULLS(wishes, star, rarity) {
  let xCount = 0;
  let yCount = 0;
  let xIndex = 0;

  let cWishes = wishes.filter(x => x[0]);

  for (let i = 0; i < cWishes.length; i++) {
    xIndex++;
    if (included(cWishes[i][0], star)) {
      yCount++;
      xCount += xIndex;
      xIndex = 0;
    }
  }

  if (yCount == 0) return `Pulled no ${rarity}★ yet`;
  return (xCount / yCount).toFixed(2).replace(/[.,]00$/, "");
}

function included(wish, list) {
  let cList = list.filter(x => x[0]);

  for (let i = 0; i < cList.length; i++) {
    if (wish.toString().toLowerCase() === cList[i][0].toString().toLowerCase()) {
      return true;
    }
  }

  return false;
}








