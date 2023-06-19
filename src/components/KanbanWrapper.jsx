import React from "react";
import { Droppable } from "react-beautiful-dnd";
import KanbanCard from "./KanbanCard";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import { Circle } from "@mui/icons-material";
import addIcon from "../assets/add.svg";

const KanbanWrapper = ({ wrapper, cardData }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      bgcolor="#F5F5F5"
      minWidth="33%"
      height="100%"
      p={3}
      borderRadius={5}
      ml={2}
      mt={4}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingBottom={1.5}
      >
        <Box display="flex" >
          <Circle sx={{ alignSelf: "center", width: "10px", fill: `${wrapper.dotcolor}` }} />
          <Typography variant="subtitle1" mx={1} fontWeight="bold">
            {wrapper.title}
          </Typography>
          <IconButton
            sx={{
              width: "25px",
              height: "25px",
              borderRadius: 10,
              bgcolor: "#E0E0E0",
              color: "#625F6D",
              fontSize: 13,
              fontWeight: "bold",
              alignSelf: "center"
            }}
          >
            {wrapper.cardCount}
          </IconButton>
        </Box>
        {wrapper.addbutton ? (
          <img src={addIcon} alt="add-icon" width={30} height={30} />
        ) : null}
      </Box>
      <Divider
        sx={{
          marginBottom: 2,
          borderTopWidth: "3px",
          borderTopColor: `${wrapper.hrcolor}`,
        }}
      ></Divider>
      <Droppable droppableId={wrapper.id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{ display: "flex", flexDirection: "column", gap: 5 }}
          >
            {wrapper.cards.map((cardId, index) => (
              <KanbanCard key={cardId} card={cardData[cardId]} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Box>
  );
};

export default KanbanWrapper;
