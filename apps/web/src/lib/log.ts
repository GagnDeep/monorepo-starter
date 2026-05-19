type Level = 'debug' | 'info' | 'warn' | 'error';

const isProd = process.env.NODE_ENV === 'production';

function emit(level: Level, msg: string, fields?: Record<string, unknown>) {
  const payload = { level, msg, time: new Date().toISOString(), ...fields };
  const line = isProd ? JSON.stringify(payload) : `[${level}] ${msg}${fields ? ' ' + JSON.stringify(fields) : ''}`;
  if (level === 'error' || level === 'warn') console.error(line);
  else console.log(line);
}

export const log = {
  debug: (msg: string, fields?: Record<string, unknown>) => emit('debug', msg, fields),
  info: (msg: string, fields?: Record<string, unknown>) => emit('info', msg, fields),
  warn: (msg: string, fields?: Record<string, unknown>) => emit('warn', msg, fields),
  error: (msg: string, fields?: Record<string, unknown>) => emit('error', msg, fields),
};
