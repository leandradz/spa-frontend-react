import md5 from "md5";

export const useGetData = () => {
  const timestamp = Number(new Date());
  const hash = md5(
    timestamp +
      process.env.REACT_APP_PRIVATE_KEY +
      process.env.REACT_APP_PUBLIC_KEY
  );

  const getCharacters = async () => {
    const result = await fetch(
      `${process.env.REACT_APP_BASE_URL}/characters?ts=${timestamp}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${hash}`
    )
      .then((response) => response.json())
      .then((resp) => resp)
      .catch((err) => console.log(err));

    return result;
  };

  return {
    getCharacters,
  };
};
