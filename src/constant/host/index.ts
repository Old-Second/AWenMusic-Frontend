let HOST_NAME: string = '';
if (process.env.NODE_ENV === 'development') {
  HOST_NAME = 'ws://localhost:8201';
} else if (process.env.NODE_ENV === 'production') {
  HOST_NAME = 'ws://43.138.21.71:8201';
}
export { HOST_NAME };
