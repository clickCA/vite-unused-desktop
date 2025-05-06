import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const isDesktop = process.env.build_type === 'desktop';

function getExtensions() {
  const extensions = ['.js', '.ts', '.tsx', '.json'];
  if (isDesktop) {
    return [...extensions.map((ext) => `.desktop${ext}`), ...extensions];
  }

  return extensions;
};

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: getExtensions(),
  },
})
