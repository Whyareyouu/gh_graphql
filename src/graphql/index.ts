export * from "./documents/";

export {
  useGetAnimeListQuery,
  useGetAnimeByIdQuery,
  useGetRelationsByIdQuery,
  MediaListStatus,
} from "./hooks/__generated__";

export type {
  GetStatusDistributionByIdQuery,
  GetScoreDistributionByIdQuery,
  GetCharactersByIdQuery,
  GetAnimeByIdQuery,
} from "./requests/__generated__";

export type { StatusDistribution, ScoreDistribution, GetAnimeListQuery } from "./hooks/__generated__";
export { MediaStatus } from "./hooks/__generated__";
