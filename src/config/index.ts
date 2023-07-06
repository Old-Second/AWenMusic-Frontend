let HOST_NAME: string = '';
if (process.env.NODE_ENV === 'development') {
  HOST_NAME = 'http://10.135.87.0:8200';
} else if (process.env.NODE_ENV === 'production') {
  HOST_NAME = '/awen';
}
export { HOST_NAME };
