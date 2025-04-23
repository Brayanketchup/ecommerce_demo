const filterByCategory = (data, targetCategory) => {
    return data.filter(item => 
      Array.isArray(item.category) && item.category.includes(targetCategory)
    );
  };