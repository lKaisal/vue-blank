/**
 * Склонения: 1 яблоко, 2 яблока, 5 яблок
 * Пример: plural(3, ['яблоко, яблока, яблок'])
 * Результат примера: "3 яблока"
 * Взято отсюда: https://gist.github.com/realmyst/1262561
 */
export default function(
  n: number,
  titles: string[]) {
  const cases = [2, 0, 1, 1, 1, 2]

  return n + ' ' + titles[
    (n % 100 > 4 && n % 100 < 20) ? 2 : cases[(n % 10 < 5) ? n % 10 : 5]
  ]
}
