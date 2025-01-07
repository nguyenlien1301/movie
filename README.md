# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!-- API Read Access Token
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTljNjZkMWVkODk2M2VhNjdkNzAyYjA5OWM4MzE0MSIsIm5iZiI6MTczMDc0NjgwNi44Mzc3Nzk4LCJzdWIiOiI2NzI4ZTRiZjU5MTgxMzdjZmMzOWMxZDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.OwLoowturuSqjtKKwSfeYzYcXDke9EhRQ1OCqIBFyaM
 -->
<!-- api tìm kiếm -->

https://api.themoviedb.org/3/search/movie
https://api.themoviedb.org/3/discover/movie

<!-- <iframe width="1006" height="566" src="https://www.youtube.com/embed/4_q_IA6LeUw" title="12 Angry Men (1957) - Knife Scene" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->

<!-- 1. chức năng tìm kiếm tất cả (search all) -->

<!-- 2. lưu usename vào local ẩn nút đăng nhập hiện nút log out -->
<!-- 3. đang ở thì dispath trang đó -->
<!-- 4. payload là obj, trong obj nhận bất kì page, searchParam, searchvalue -->

5. khi f5 phải giữ lại cái session ( xem tới đâu) bật popup giống phim 3d,
6. kết hợp vừa phim vừa nhạc, thì mp3
7. api mp3 https://gist.github.com/vic4key/9144dfeee432504fa750558fafef7e18
   https://apilist.fun/api/spotify-web
   https://apilist.fun/category/music

Công việc làm popup video

<!-- Xử lí modal thông báo hỏi xem ng dùng có muốn xem tiếp hay xem từ đầu không -->

1. Nếu Lần đầu nhấn xem video thì sẽ ko hiện modal thông báo hoặc lần thứ 2 nhấn xem nhưng thanh proress nó vẫn chạy ở số giây là 000 thì sẽ không bật modal thông báo
2. Chỉ cần thanh proress chạy dù là 1s thì mỗi lần nhấn vào xem video nó đều bật modal thông báo
3. Vừa load đc phim là nó sẽ hiện ngay modal thông báo ( lưu ý: phải chờ tải phim khi nhấn vào nút xem phim)
4. Nếu ng dùng nhấn nút close hoặc nhấn ra ngoài lớp overlay thì sẽ quay lại xem từ đầu

   Action & Adventure
   Animation
   Comedy
   Crime
   Documentary
   Drama
   Family
   Kids
   Mystery
   News
   Reality
   Sci-Fi & Fantasy
   Soap
   Talk
   War & Politics
   Western

{id: 28, name: 'Action'}
{id: 12, name: 'Adventure'}
{id: 16, name: 'Animation'}
{id: 35, name: 'Comedy'}
{id: 80, name: 'Crime'}
{id: 99, name: 'Documentary'}
{id: 18, name: 'Drama'}
{id: 10751, name: 'Family'}
{id: 14, name: 'Fantasy'}
{id: 36, name: 'History'}
{id: 27, name: 'Horror'}
{id: 10402, name: 'Music'}
{id: 9648, name: 'Mystery'}
{id: 10749, name: 'Romance'}
{id: 878, name: 'Science Fiction'}
{id: 10770, name: 'TV Movie'}
{id: 53, name: 'Thriller'}
{id: 10752, name: 'War'}
{id: 37, name: 'Western'}

font-family: 'Poppins', sans-serif;

// genresList.map((genre) => {
// const movies = getMoviesByGenreId(genre.id);
// const genres
// if (movies.length > 0) {
// const movieTitles = movies.map((movie) => movie);
// // console.log("🚀movieTitles---->", movieTitles);
// }
// });
