import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import star from "assets/icons/star.png";
import { Container } from "@mui/system";
import { TableRow } from "@mui/material";
import { Form } from "formik";
// import { fetchOneDevice } from "../http/deviceApi";

const DevicePage = () => {
  // const [device, setDevice] = useState({ info: [] });
  //!temp
  const description = [
    { id: 1, title: "Материал", description: " Дуб" },
    { id: 2, title: "Цвет", description: " Белый" },
    { id: 3, title: "Покрытие", description: " Лак" },
  ];

  const device = {
    id: 1,
    name: "Стол-1",
    price: 25000,
    rating: 5,
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F39%2FRokoko_bord_av_valn%25C3%25B6tstr%25C3%25A4%252C_1700-talets_sista_h%25C3%25A4lft_-_Hallwylska_museet_-_108491.tif%2Flossy-page1-1200px-Rokoko_bord_av_valn%25C3%25B6tstr%25C3%25A4%252C_1700-talets_sista_h%25C3%25A4lft_-_Hallwylska_museet_-_108491.tif.jpg&imgrefurl=https%3A%2F%2Fru.wiktionary.org%2Fwiki%2F%25D1%2581%25D1%2582%25D0%25BE%25D0%25BB&tbnid=LsSM_xmtZlbcwM&vet=12ahUKEwirm_iV8Mj7AhVExrsIHXN0DqcQMygCegUIARDiAQ..i&docid=0ZTb6dvI6F446M&w=1200&h=1272&q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0%20%D1%81%D1%82%D0%BE%D0%BB&ved=2ahUKEwirm_iV8Mj7AhVExrsIHXN0DqcQMygCegUIARDiAQ",
    info: description,
  };

  // const { id } = useParams();

  useEffect(() => {
    // fetchOneDevice(id).then((data) => setDevice(data));
  }, []);

  return (
    <Container className="mt-3">
      <TableRow>
        <div>
          <img
            alt="img"
            // src={process.env.REACT_APP_API_URL + device.img}
            src={device.img}
          />
        </div>
        <div>
          <form className="d-flex flex-divumn align-items-center">
            <h2>{device.name}</h2>
            <div
              style={{
                background: `url(${star}) no-repeat center center`,
                backgroundSize: "cover",
                width: 240,
                height: 240,
                fontSize: 102,
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
              className="d-flex align-item-center justify-content-center"
            >
              {device.rating}
            </div>
          </form>
        </div>
        <div>
          <div
            className="card"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid light-gray",
            }}
          >
            <h3>от: {device.price} руб.</h3>
            <button>Добавить в корзину</button>
          </div>
        </div>
      </TableRow>
      <div className="row">
        <h1>Характеристики:</h1>
        {device.info.map((info, index) => (
          <div
            className="row"
            key={info.id}
            style={{ background: index % 2 ? "lightgray" : "opacity" }}
          >
            {info.title}: {info.description}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default DevicePage;

/*   const device = {
    id: 1,
    name: "Стол-1",
    price: 25000,
    rating: 5,
    img:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F39%2FRokoko_bord_av_valn%25C3%25B6tstr%25C3%25A4%252C_1700-talets_sista_h%25C3%25A4lft_-_Hallwylska_museet_-_108491.tif%2Flossy-page1-1200px-Rokoko_bord_av_valn%25C3%25B6tstr%25C3%25A4%252C_1700-talets_sista_h%25C3%25A4lft_-_Hallwylska_museet_-_108491.tif.jpg&imgrefurl=https%3A%2F%2Fru.wiktionary.org%2Fwiki%2F%25D1%2581%25D1%2582%25D0%25BE%25D0%25BB&tbnid=LsSM_xmtZlbcwM&vet=12ahUKEwirm_iV8Mj7AhVExrsIHXN0DqcQMygCegUIARDiAQ..i&docid=0ZTb6dvI6F446M&w=1200&h=1272&q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0%20%D1%81%D1%82%D0%BE%D0%BB&ved=2ahUKEwirm_iV8Mj7AhVExrsIHXN0DqcQMygCegUIARDiAQ",
  };
  const description = [
    { id: 1, title: "Материал", description: " Дуб" },
    { id: 2, title: "Цвет", description: " Белый" },
    { id: 3, title: "Покрытие", description: " Лак" },
  ]; */
