const sortItemsBy = (sortKey: string, reverse: boolean = false) => {
  // by default sort in ascending order
  return (a: any, b: any) => {
    if (a[sortKey] < b[sortKey]) {
      return reverse ? 1 : -1;
    }
    if (a[sortKey] > b[sortKey]) {
      return reverse ? -1 : 1;
    }
    return 0;
  };
};

const filterItemsBy = (category: string, tags: string[]) => {
  return (item: any) => {
    return (
      item.category.includes(category) &&
      tags.every((tag) => item.tags.includes(tag))
    );
  };
};

const shortify = (text: string, maxLength = 50) => {
  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength) + " ...";
};

export { sortItemsBy, filterItemsBy, shortify };
