import React, { useState } from 'react'
import { InferGetServerSidePropsType, GetServerSideProps  } from 'next'
import {  DropResult,  resetServerContext } from 'react-beautiful-dnd'
import XDrop from './drop';
import { initialData } from "./data";
import XDrag from './drag';
import XColumn from './column';
import { addTask, deleteTask, onChange } from './utils'
import styled from "styled-components";

const CSS = styled.div`
  .column-content {
    display: flex;
  }
`;

import dynamic from 'next/dynamic';
const DragDropContext = dynamic(
  () =>
    import('react-beautiful-dnd').then(mod => {
      return mod.DragDropContext;
    }),
  {ssr: false},
);



function Index({ message }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const [data, setData] = useState(initialData);
    const onDragEnd = (res: DropResult) => {
        const { source, destination, draggableId } = res;
        console.log(res.type);
        
        if (!destination) return;
        if (onChange(source, destination)) return;
        if (res.type === "TASK") {
            let newData = deleteTask(data, source);
            newData = addTask(newData, destination, draggableId);
            setData(newData);
        }
        if (res.type === "COLUMN") {
            let columnOrder = [...data.columnOrder];
            columnOrder.splice(source.index, 1);
            columnOrder.splice(destination.index, 0, draggableId);
            data.columnOrder = columnOrder;
            setData({ ...data });
        }
    }
    return (
        <CSS className="App">
            <DragDropContext onDragEnd={onDragEnd}>
                <XDrop
                    className="column-content"
                    droppableId="all-columns"
                    type="COLUMN"
                    direction="horizontal"
                >
                    {data.columnOrder.map((columnId, index) => {
                        const column = data.columns[columnId];
                        const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);
                        return (
                            <XDrag
                                key={columnId}
                                draggableId={columnId}
                                index={index}
                                dragAll={false}
                            >
                                <XColumn column={column} tasks={tasks} />
                            </XDrag>
                        );
                    })}
                </XDrop>
            </DragDropContext>
        </CSS>
    )
}

export default Index

export const getServerSideProps: GetServerSideProps = async (context) => {
    resetServerContext();
    return { props: {} };
  };