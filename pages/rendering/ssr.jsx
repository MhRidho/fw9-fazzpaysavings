import React, { useState, useEffect } from "react";
import axiosServer from '../../helper/axiosServer';
import { useRouter } from "next/router";
import cookies from "next-cookies";
import { Button } from "react-bootstrap";

export async function getServerSideProps(context) {
  try {
    console.log('Log Server Side');
    const dataCookie = cookies(context);
    const page = !context.query?.page ? 1 : context.query.page;
    const result = await axiosServer.get(
      `user?page=1&limit=50&search=&sort=firstName ASC`,
      {
        headers: {
          Authorization: `Bearer ${dataCookie.token}`,
        },
      }
    );
    return {
      props: {
        data: result.data.data,
        pagination: result.data.pagination,
      },
    };
  } catch (error) {
    if (error.response.status === 403) {
      return {
        redirect: {
          destination: '/auth/login',
          permanent: false,
        },
      };
    } else {
      return {
        props: {
          isError: true,
          msg: error.response,
        },
      };
    }
  }
}

export default function SSR(props) {
  const router = useRouter();
  const [data, setData] = useState(props.data);

  console.log('Log Client Slide');
  const handleNextPage = () => {
    router.push(`/rendering/ssr?page=${+router.query + 1}`);
  };

  return (
    <div>
      <h1>Rendering with SSR</h1>
      <hr />
      {data.map((item) => (
        <div key={item.id}>
          <h5>{item.firstName}</h5>
        </div>
      ))}
      <Button onClick={handleNextPage}>Go to next page</Button>
    </div>
  )
}