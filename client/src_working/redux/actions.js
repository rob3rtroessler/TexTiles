import _ from "lodash";
import {
  NEW_TEXT,
  SET_HOVER,
  TICK,
  SET_COLOR,
  INCREMENT_RENDER_COUNT,
  SELECT_THEME,
  UPDATE_CONCORDANCE_DATA
} from "./constants";

export const newText = text => ({
  type: NEW_TEXT,
  text
});

export const newFetch = data => ({
  type: UPDATE_CONCORDANCE_DATA,
  data
})

export const setHover = letter => ({
  type: SET_HOVER,
  letters: !letter ? null : Array.isArray(letter) ? _.uniq(letter) : [letter]
});

export const tick = () => ({
  type: TICK
});

export const setColor = (user, color) => ({
  type: SET_COLOR,
  user,
  color
});

export const incrementRenderCount = (component, mode) => ({
  type: INCREMENT_RENDER_COUNT,
  component,
  mode
});

export const selectTheme = theme => ({
  type: SELECT_THEME,
  theme
});
