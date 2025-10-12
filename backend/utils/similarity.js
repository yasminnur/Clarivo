// Fungsi menghitung kemiripan sederhana berbasis kata yang sama
export const calculateSimilarity = (text1, text2) => {
  const words1 = text1.split(/\s+/);
  const words2 = text2.split(/\s+/);

  const set1 = new Set(words1);
  const set2 = new Set(words2);

  const intersection = new Set([...set1].filter((w) => set2.has(w)));
  const union = new Set([...set1, ...set2]);

  return intersection.size / union.size || 0;
};
