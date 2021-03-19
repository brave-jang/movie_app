import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";

const Container = styled.div`
  padding: 0px 10px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
  loading ? null : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="상영 중인 컨텐츠">
          {nowPlaying.map((movie) => movie.title)}
        </Section>
      )}
      {upcoming && nowPlaying.length > 0 && (
        <Section title="상영 예정 컨텐츠">
          {upcoming.map((movie) => movie.title)}
        </Section>
      )}
      {popular && nowPlaying.length > 0 && (
        <Section title="인기 있는 컨텐츠">
          {popular.map((movie) => movie.title)}
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
