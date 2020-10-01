export const VIEW_MODES = {
  DAILY: { title: 'DAILY', gap: 1 },
  WEEKLY: { title: 'WEEKLY', gap: 7 },
};

export const VIEW_MODES_LIST = Object.values(VIEW_MODES);

export const TIMELINE_12_SET = [
  '자정 🌙',
  '오전 1시',
  '오전 2시',
  '오전 3시',
  '오전 4시',
  '오전 5시',
  '오전 6시',
  '오전 7시',
  '오전 8시',
  '오전 9시',
  '오전 10시',
  '오전 11시',
  '정오 🌞',
  '오후 1시',
  '오후 2시',
  '오후 3시',
  '오후 4시',
  '오후 5시',
  '오후 6시',
  '오후 7시',
  '오후 8시',
  '오후 9시',
  '오후 10시',
  '오후 11시',
];

export const TIMELINE_NUM_SET = TIMELINE_12_SET.map((v, idx) => idx);
