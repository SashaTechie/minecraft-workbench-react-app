import grassImage from "../../media/images/blocks/grass.webp";
import cobblestoneImage from "../../media/images/blocks/cobblestone.webp";
import oakWoodImage from "../../media/images/blocks/wood.webp";
import oakPlanksImage from "../../media/images/blocks/wooden_planks.webp";

const images = {
    grass: grassImage,
    cobblestone: cobblestoneImage,
    oakWood: oakWoodImage,
    oakPlanks: oakPlanksImage
}

const resources = [
    {type: "image", value: images.grass, alt: "🦗" , label: "Блок травы"},
    {type: "image", value: images.cobblestone, alt:"🪨", label: "Булыжник"},
    {type: "image", value: images.oakWood, alt:"🪵", label: "Дубовая древесина"},
    {type: "image", value: images.oakPlanks, alt:"🪓", label: "Дубовые доски"}
];

export default resources;