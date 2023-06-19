import { Box, Typography, IconButton } from "@mui/material";
import { Draggable } from "react-beautiful-dnd";
import { Folder2, Message } from "iconsax-react";
import { MoreHoriz } from "@mui/icons-material";

const KanbanCard = ({ card, index }) => {
  return (
    <Draggable draggableId={card.title} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Box
            display="flex"
            flexDirection="column"
            mb={1}
            width="100%"
            bgcolor="white"
            p={3}
            borderRadius={6}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                width="fit-content"
                display="inline-flex"
                alignItems="center"
                px="5px"
                py="3px"
                borderRadius="4px"
                fontSize={12}
                color={card.tagTextcolor}
                bgcolor={card.tagBGcolor}
              >
                {card.tag}
              </Box>
              <MoreHoriz />
            </Box>
            <Box display="flex" flexDirection="column" mt={1} mb={1}>
              <Typography variant="subtitle1" fontWeight="bold">
                {card.title}
              </Typography>
              {card.description ? (
                <Typography variant="subtitle2" color="#787486">
                  {card.description}
                </Typography>
              ) : null}
              {card.background ? (
                <Box display="flex" alignItems="center" justifyContent="center">
                {card.background.map((image, index) => {
                  return <img key={index} src={image} style={{borderRadius: 12, maxWidth: `${card.maxwidth}`, maxHeight: 200, marginRight: 12}} />
                })}
                </Box>
              ): null}
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                ml={1}
              >
                {card.avatars.map((avatar, index) => (
                  <div key={index}>
                    <Box
                      width={22}
                      height={22}
                      bgcolor="white"
                      borderRadius={12}
                      alignContent="center"
                      ml="-5px"
                    >
                      <img src={avatar} alt={index} height={20} width={20} />
                    </Box>
                  </div>
                ))}
              </Box>
              <Box display="flex" alignItems="center">
                <IconButton sx={{ gap: "4px", color: "#787486" }}>
                  <Message size={16} />
                  <Typography variant="subtitle2">
                    {card.comments} Comments
                  </Typography>
                </IconButton>
                <IconButton sx={{ gap: "4px", color: "#787486" }}>
                  <Folder2 size={14} />
                  <Typography variant="subtitle2">
                    {card.files} files
                  </Typography>
                </IconButton>
              </Box>
            </Box>
          </Box>
        </div>
      )}
    </Draggable>
  );
};

export default KanbanCard;
