import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useRef,
} from 'react';
import Outlets from '../components/Outlets';

function index(props) {
  const [outlets, setOutlet] = useState([
    { id: '1', name: 'outlet1' },
    { id: '2', name: 'outlet2' },
  ]);

  const [id, setId] = useState();
  const [name, setName] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const copy = [...outlets];
    let newOutlet = {};
    newOutlet.id = id;
    newOutlet.name = name;
    copy.push(newOutlet);

    setOutlet(copy);
    console.log(`Submitting Name ${id} ${name}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          id:
          <input
            type='text'
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <label>
          Outlet Name:
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
      <Outlets data={outlets} />
    </>
  );
}

// This function gets called at build time
// getServerProps vs getStaticProps
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts

//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const posts = await res.json();

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   };
// }

export default index;
