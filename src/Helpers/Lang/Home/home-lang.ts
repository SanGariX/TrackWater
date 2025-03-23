import { useSelector } from "react-redux";
import { RootState } from "../../../Store/store";

export const langHome = (nameLang: string) => {
  const { langState } = useSelector((state: RootState) => state.langSlice);
  if (nameLang === "container_text") {
    return langState === "eng"
      ? "Record daily water intake and track"
      : "Відстежуйте та записуйте щоденне споживання води";
  }else if(nameLang === "container_title"){
    return langState === "eng"
    ? "Water consumption tracker"
    : "Трекер споживання води";
  }else if(nameLang === "container_btn1"){
    return langState === "eng"
    ? "Try tracker"
    : "Спробуйте";
  }else if(nameLang === "container_btn2"){
    return langState === "eng"
    ? "Sign In"
    : "Увійти";
  }else if (nameLang === "happy_customers_title_start") {
    return langState === "eng"
    ? "Our"
    : "Це";
  }else if (nameLang === "happy_customers_title_marker") {
    return langState === "eng"
    ? "happy"
    : "щасливі";
  }else if (nameLang === "happy_customers_title_end") {
    return langState === "eng"
    ? "customers"
    : "користувачі";
  }else if (nameLang === "info_grid_item1") {
    return langState === "eng"
    ? "Habit drive"
    : "Звичка";
  }else if (nameLang === "info_grid_item2") {
    return langState === "eng"
    ? "View statistics"
    : "Статистика";
  }else if (nameLang === "info_grid_long-item") {
    return langState === "eng"
    ? "Personal rate setting"
    : "Індивідуальна норма";
  }
};
