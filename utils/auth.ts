export const saveToken = (token: string) => {
  if (typeof window !== 'undefined') localStorage.setItem('token', token);
};

export const getToken = () => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('token');
};

export const logout = () => {
  if (typeof window !== 'undefined') localStorage.removeItem('token');
};
