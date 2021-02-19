import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { FilterContainer, Chip, Text } from "./styles";
import { orderList } from "../../../actions/showsActions";

const optionsChip = [
  { id: 1, value: "recent", name: "Reciente" },
  { id: 2, value: "alphabeical", name: "A - Z" },
  { id: 3, value: "punctuation", name: "Puntuación" },
];

export const Filter = () => {
  const order = useSelector((state) => state.shows.order);
  const dispatch = useDispatch();

  const handleOrderList = (type) => {
    dispatch(orderList(type));
  };

  console.log({ order });
  const printChips = () => {
    return optionsChip.map((option) => {
      const { id, value, name } = option;
      return (
        <Chip
          key={id}
          isActive={value === order}
          onClick={() => handleOrderList(value)}
        >
          {name}
        </Chip>
      );
    });
  };

  return (
    <>
      <Text>Ordenar por:</Text>
      <FilterContainer>{printChips()}</FilterContainer>
    </>
  );
};
