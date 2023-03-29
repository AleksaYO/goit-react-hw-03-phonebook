import css from './Phonebook.module.css';

export function PhonebookList({ state: { contacts, filter }, onDelete }) {
  const newArr = contacts.filter(
    item =>
      item.name.toLowerCase().includes(filter.toLowerCase()) ||
      item.number.includes(filter)
  );
  return (
    <>
      <ul className={css.list}>
        {newArr.map(item => {
          return (
            <li id={item.id} key={item.id}>
              {item.name}: {item.number}
              <button onClick={() => onDelete(item.id)}>Удалить</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
