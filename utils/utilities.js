export function randomColor() {
  const colors = [
    "#FF0000",
    "#FFA500",
    "#FFFF00",
    "#008000",
    "#0000FF",
    "#4B0082",
    "#EE82EE",
    "#800000",
    "#808000",
    "#00FF00",
    "#00FFFF",
    "#000080",
    "#FF00FF",
    "#C0C0C0",
    "#000000",
    "#FFFFFF",
    "#800080",
    "#FF4500",
    "#DA70D6",
    "#FFD700",
    "#32CD32",
    "#1E90FF",
    "#9370DB",
    "#228B22",
    "#87CEEB",
    "#48D1CC",
    "#20B2AA",
    "#B0C4DE",
    "#FF69B4",
    "#DAA520",
    "#008080",
    "#800080",
    "#2E8B57",
    "#DC143C",
    "#7B68EE",
    "#4682B4",
    "#6495ED",
    "#6A5ACD",
    "#00BFFF",
    "#87CEFA",
    "#F08080",
    "#FFA07A",
    "#FA8072",
    "#E9967A",
    "#F0E68C",
    "#FFFFE0",
    "#90EE90",
    "#ADD8E6",
    "#FFB6C1",
    "#FFC0CB",
    "#DDA0DD",
    "#B0E0E6",
    "#800000",
    "#FF6347",
    "#FFE4C4",
    "#FFDEAD",
    "#F5DEB3",
    "#F0FFFF",
    "#F0FFF0",
    "#FFF0F5",
    "#FFFACD",
    "#FAFAD2",
    "#FFEFD5",
    "#FFEBCD",
    "#FFE4B5",
    "#FFDAB9",
    "#EEE8AA",
    "#F5F5DC",
    "#FAEBD7",
    "#FFE4E1",
    "#8A2BE2",
    "#A52A2A",
    "#DEB887",
    "#5F9EA0",
    "#7FFF00",
    "#D2691E",
    "#FF7F50",
    "#6495ED",
    "#FFF8DC",
    "#DCDCDC",
    "#F5F5F5",
    "#FFFF00",
    "#9ACD32",
    "#8B008B",
    "#00CED1",
    "#9400D3",
    "#FFD700",
    "#8B0000",
    "#483D8B",
    "#2F4F4F",
    "#8B4513",
    "#DAA520",
    "#556B2F",
    "#BDB76B",
    "#556B2F",
    "#8B4513",
    "#8A2BE2",
    "#A0522D",
    "#5F9EA0",
    "#D2691E",
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  const bgColor = colors[randomIndex];

  // Calculate brightness of background color
  const brightness =
    (parseInt(bgColor.slice(1, 3), 16) * 299 +
      parseInt(bgColor.slice(3, 5), 16) * 587 +
      parseInt(bgColor.slice(5, 7), 16) * 114) /
    1000;

  // Choose appropriate text color based on background brightness
  const textColor = brightness > 125 ? "#000000" : "#FFFFFF";

  return { bgColor, textColor };
}