import React, { useState, useEffect } from 'react'
import axios from 'axios';

export async function getStaticProps(context) {
  try {
    console.log('Log Server Side');
    const result = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(result.data);
    return {
      props: {
        data: result.data
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }

}

const SSG = (props) => {
  const [data, setData] = useState(props.data);
  console.log(props)
  return (
    <div>
      <h1>Rendering with SSR</h1>
      <hr />
      {data.map((item) => (
        <div key={item.id}>
          <h5>{item.name}</h5>
        </div>
      ))}
    </div>
  )
}

export default SSG;
