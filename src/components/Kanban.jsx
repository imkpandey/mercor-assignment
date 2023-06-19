import { useState } from "react";
import { DragDropContext} from "react-beautiful-dnd";
import KanbanWrapper from "./KanbanWrapper";
import { Box, useTheme, useMediaQuery } from "@mui/material";

const Kanban = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const cardData = {
    card1: {
      id: "card1",
      title: "Brainstorming",
      tag: "Low",
      tagBGcolor: "#F5EBE1",
      tagTextcolor: "#D58D49",
      description:
        "Brainstorming brings team members' diverse experience into play.",
      comments: 12,
      files: 0,
      avatars: ["./0.png", "./3.png", "./2.png"],
    },
    card2: {
      id: "card2",
      title: "Research",
      tag: "High",
      tagBGcolor: "#F8E8EA",
      tagTextcolor: "#D8727D",
      description:
        "User research helps you to create an optimal product for users.",
      comments: 10,
      files: 3,
      avatars: ["./1.png", "./5.png"],
    },
    card3: {
      id: "card3",
      title: "Wireframes",
      tag: "High",
      tagBGcolor: "#F8E8EA",
      tagTextcolor: "#D8727D",
      description:
        "Low fidelity wireframes include the most basic content and visuals.",
      comments: 4,
      files: 2,
      avatars: ["./0.png", "./5.png", "./3.png"],
    },
    card4: {
      id: "card4",
      title: "Onboarding Illustrations",
      tag: "Low",
      tagBGcolor: "#F5EBE1",
      tagTextcolor: "#D58D49",
      comments: 14,
      files: 15,
      maxwidth: "200px",
      background: ["./onprogress-1.png"],
      avatars: ["./2.png", "./3.png", "./0.png"],
    },
    card5: {
      id: "card5",
      title: "Moodboard",
      tag: "Low",
      tagBGcolor: "#F5EBE1",
      tagTextcolor: "#D58D49",
      comments: 9,
      files: 10,
      maxwidth: "45%",
      background: [
        "./onprogress-2-1.png",
        "./onprogress-2-2.png",
      ],
      avatars: ["./2.png"],
    },
    card6: {
      id: "card6",
      title: "Mobile App Design",
      tag: "Completed",
      tagBGcolor: "#E9F9F0",
      tagTextcolor: "#68B266",
      comments: 12,
      files: 15,
      maxwidth: "200px",
      background: ["./done-1.png"],
      avatars: ["./5.png", "./3.png"],
    },
    card7: {
      id: "card7",
      title: "Design System",
      tag: "Completed",
      tagBGcolor: "#E9F9F0",
      tagTextcolor: "#68B266",
      description: "It just needs to adapt the UI from what you did before",
      comments: 12,
      files: 15,
      avatars: ["./0.png", "./2.png", "./3.png"],
    },
  };

  const [wrapper, setWrapper] = useState({
    wrapper1: {
      id: "wrapper1",
      title: "To Do",
      cards: ["card1", "card2", "card3"],
      cardCount: "3",
      dotcolor: "#5030E5",
      hrcolor: "#5030E5", 
      addbutton: true,
    },
    wrapper2: {
      id: "wrapper2",
      title: "On Progress",
      cards: ["card4", "card5"],
      cardCount: "2",
      dotcolor: "#FFA500",
      hrcolor: "#FFA500", 
      addbutton: false,
    },
    wrapper3: {
      id: "wrapper3",
      title: "Done",
      cards: ["card6", "card7"],
      cardCount: "2",
      dotcolor: "#76A5EA",
      hrcolor: "#8BC48A", 
      addbutton: false,
    },
  });

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const sourceWrapperId = source.droppableId;
    const destinationWrapperId = destination.droppableId;

    if (sourceWrapperId === destinationWrapperId) {
      const wrapper = wrapper[sourceWrapperId];
      const cards = [...wrapper.cards];
      const [removed] = cards.splice(source.index, 1);
      cards.splice(destination.index, 0, removed);

      const updatedWrapper = {
        ...wrapper,
        [sourceWrapperId]: {
          ...wrapper,
          cards,
        },
      };

      setWrapper(updatedWrapper);
    } else {
      const sourceWrapper = wrapper[sourceWrapperId];
      const destinationWrapper = wrapper[destinationWrapperId];
      const sourceCards = [...sourceWrapper.cards];
      const destinationCards = [...destinationWrapper.cards];
      const [removed] = sourceCards.splice(source.index, 1);
      destinationCards.splice(destination.index, 0, removed);

      const updatedWrapper = {
        ...wrapper,
        [sourceWrapperId]: {
          ...sourceWrapper,
          cards: sourceCards,
        },
        [destinationWrapperId]: {
          ...destinationWrapper,
          cards: destinationCards,
        },
      };
      setWrapper(updatedWrapper);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Box display="flex" flexDirection={!matches ? "column" : null} justifyContent="space-between" maxWidth="95%" mx="10px">
        <KanbanWrapper wrapper={wrapper.wrapper1} cardData={cardData} />
        <KanbanWrapper wrapper={wrapper.wrapper2} cardData={cardData} />
        <KanbanWrapper wrapper={wrapper.wrapper3} cardData={cardData} />
      </Box>
    </DragDropContext>
  );
};

export default Kanban;
