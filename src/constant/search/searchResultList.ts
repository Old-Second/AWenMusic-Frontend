interface resultItem {
  name: string;
  path: string;
}

const searchResultList: resultItem[] = [
  {
    name: '歌曲',
    path: '/Home/searchDetail/song'
  },
  {
    name: '专辑',
    path: '/Home/searchDetail/album'
  },
  {
    name: '歌手',
    path: '/Home/searchDetail/artist'
  }
];
export type { resultItem };
export { searchResultList };
