import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { theme_type } from "../../interface/theme";
import { THEME_CHANGE } from "../../reducers/theme";

const useTheme = (): [
  typeof theme,
  typeof chooseTheme,
  typeof settingTheme
] => {
  const dispatch = useDispatch();

  const getInitialTheme = useCallback(() => {
    // localStorage에서 'app_theme' 키의 값을 가져온다.
    let theme = null;
    if (typeof window !== "undefined") {
      theme = window.localStorage.getItem("app_theme") as
        | "light"
        | "dark"
        | "orange"
        | "pink"
        | null;
    }

    const INVALID_THEME =
      theme !== "light" &&
      theme !== "dark" &&
      theme !== "orange" &&
      theme !== "pink";

    if (typeof window !== "undefined") {
      // 테마가 null이거나 light, dark가 아닐 경우에 운영체제의 테마로 설정해준다.
      if (!theme || INVALID_THEME) {
        const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
        theme = matches ? "dark" : "light";
      }
    } else {
      theme = "dark";
    }

    return theme;
  }, []);

  const [theme, setTheme] = useState(getInitialTheme);

  const chooseTheme = useCallback((e: theme_type) => {
    setTheme(e);
  }, []);

  useEffect(() => {
    dispatch({
      type: THEME_CHANGE,
      data: theme,
    });
    window.localStorage.setItem("app_theme", theme!!);
  }, [theme]);

  const settingTheme = () => {
    let theme = null;
    if (typeof window !== "undefined") {
      theme = window.localStorage.getItem("app_theme") as
        | "light"
        | "dark"
        | "orange"
        | "pink"
        | null;
    }

    const INVALID_THEME =
      theme !== "light" &&
      theme !== "dark" &&
      theme !== "orange" &&
      theme !== "pink";

    if (typeof window !== "undefined") {
      // 테마가 null이거나 light, dark가 아닐 경우에 운영체제의 테마로 설정해준다.
      if (!theme || INVALID_THEME) {
        const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
        theme = matches ? "dark" : "light";
      }
    }

    window.localStorage.setItem("app_theme", theme!!);
    setTheme(theme!!);
  };

  // useEffect(() => {
  //   window.localStorage.setItem("app_theme", theme);
  // }, [theme]);

  return [theme, chooseTheme, settingTheme];
};

export default useTheme;
