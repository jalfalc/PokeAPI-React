import React, { useState } from "react";
import { useGetPokemon } from "../../hooks/useGetPokemon";
import Modal from "react-modal";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { useSearchStore } from "../../store/useSearchStore";

const SearchModal: React.FC = () => {

  const { filter, setFilter, currentSearch, setCurrentSearch, closeModal, isOpen} = useSearchStore()

  const { pokemonData } = useGetPokemon(currentSearch);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFilter(event.target.value);

  const onClickSearch = () => setCurrentSearch(filter.toLowerCase());

  const handleCloseModal = () => {
    closeModal();
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      className={
        "w-6/12 h-4/12 bg-white mx-auto p-5 mt-5 flex flex-col gap-5 items-center shadow-lg rounded-lg"
      }
    >
      <h6>What pokemon are you looking for?</h6>
      <input
        type="text"
        value={filter}
        onChange={handleInputChange}
        className="border p-2"
      />
      <button onClick={onClickSearch} className="bg-black text-white">Search</button>
      {pokemonData?.id && <PokemonCard pokemonId={pokemonData.id} />}
    </Modal>
  );
};

export default SearchModal;
