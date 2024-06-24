import useLocalstorage from "./hooks/useLocalStorage";

export default function Demo() {
  const [token, { setItem, removeItem }] = useLocalstorage('token');

  return (
    <div>
      <p>
        Твой токен: {token}
      </p>
      <div>
        <button onClick={() => setItem('new-token')}>
          Задать токен
        </button>
        <button onClick={() => removeItem()}>
          Удалить токен
        </button>
      </div>
    </div>
  );
}