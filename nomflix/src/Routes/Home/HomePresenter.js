import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 0px 20px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="상영 중인 컨텐츠">
          {nowPlaying.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
      {upcoming && nowPlaying.length > 0 && (
        <Section title="상영 예정 컨텐츠">
          {upcoming.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
      {popular && nowPlaying.length > 0 && (
        <Section title="인기 있는 컨텐츠">
          {popular.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
