export const clone = (data: any) => {
    return JSON.parse(JSON.stringify(data));
};

export const onChange = (source: any, destination: any) => {
    if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
    ) {
        return true;
    }
    return false;
};
/**
 *
 */
export const deleteTask = (data: any, { droppableId, index }: { droppableId: any, index: number }) => {
    data = clone(data);
    data.columns[droppableId].taskIds.splice(index, 1);
    return data;
};
/**
 *
 */
export const addTask = (data: any, { droppableId, index }: { droppableId: any, index: number }, taskId: any) => {
    data = clone(data);
    data.columns[droppableId].taskIds.splice(index, 0, taskId);
    return data;
};