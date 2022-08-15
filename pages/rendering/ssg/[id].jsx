import React from 'react'
import axios from 'axios';

// GSPaths = get data detail per user
export async function getStaticPaths(context) {
  try {
    const listUser = await axios.get('https://jsonplaceholder.typicode.com/users');
    const listPath = listUser.data.map((item) => ({
      params: {
        id: `${item.id}`,
      },
    }));
    console.log(listPath);
    return {
      paths: listPath,
      fallback: true
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
}

// GSProps = get data detail all user
export async function getStaticProps(context) {
  try {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
    return {
      props: {
        data: result.data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }

}

const DetailProfile = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Detail Profile</h1>
      <hr />
      <h5>{props.data.name}</h5>
      <h6>{props.data.email}</h6>
    </div>
  )
}

export default DetailProfile