/**
 * Formats a number into Indian Rupees using the Indian numbering system.
 * Example: 250000 -> "₹2,50,000"
 */
export function formatIndianRupees(amount) {
  if (amount === undefined || amount === null || isNaN(amount)) return '₹0';
  return '₹' + Number(amount).toLocaleString('en-IN');
}

/**
 * Formats large amounts into readable Indian Lakhs / Crores for badges & summaries.
 * Example: 48000000 -> "₹4.8 Cr", 350000 -> "₹3.5 Lakh"
 */
export function formatCompactRupees(amount) {
  if (amount === undefined || amount === null || isNaN(amount)) return '₹0';
  const num = Number(amount);
  if (num >= 10000000) {
    const cr = (num / 10000000).toFixed(1).replace(/\.0$/, '');
    return `₹${cr} Crore`;
  }
  if (num >= 100000) {
    const lk = (num / 100000).toFixed(1).replace(/\.0$/, '');
    return `₹${lk} Lakh`;
  }
  return formatIndianRupees(num);
}
