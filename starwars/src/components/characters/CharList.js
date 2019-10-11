import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import styled from "styled-components";

import CharCard from "./CharCard";

export default function CharList() {
  const [characters, setCharacters] = useState([]);

  //get person
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then(res => {
        const characterArr = res.data.results;
        setCharacters(characterArr);
        // console.log(characterArr);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const [apiUrl, setApiUrl] = useState("https://swapi.co/api/people/");

  useEffect(() => {
    axios
      .get(apiUrl)
      .then(res => {
        console.log(res.data);
        setApiUrl(apiUrl);
        console.log(apiUrl);
      })
      .catch(err => {
        console.log(err);
      });
  }, [apiUrl]);

  return (
    <>
      <Pagination className="pagination" aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink onClick={() => setApiUrl(apiUrl + "?page=1")}>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => setApiUrl(apiUrl + "?page=2")}>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => setApiUrl(apiUrl + "?page=3")}>
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => setApiUrl(apiUrl + "?page=4")}>
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => setApiUrl(apiUrl + "?page=5")}>
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => setApiUrl(apiUrl + "?page=6")}>
            6
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => setApiUrl(apiUrl + "?page=7")}>
            7
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => setApiUrl(apiUrl + "?page=8")}>
            8
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => setApiUrl(apiUrl + "?page=9")}>
            9
          </PaginationLink>
        </PaginationItem>
      </Pagination>
      <CharGrid className="character-wrapper">
        {characters.map((char, index) => {
          return (
            <CharCard
              key={index}
              name={char.name}
              gender={char.gender}
              height={char.height}
              birth={char.birth_year}
            />
          );
        })}
      </CharGrid>
    </>
  );
}

const CharGrid = styled.div`
  margin: 5% auto 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: #c10001;
  text-align: center;
  .character-card {
    width: 25%;
    margin: 2%;
    border: 1px solid #f40001;
    border-radius: 3px;
  }
`;
