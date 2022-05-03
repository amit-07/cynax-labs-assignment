import tickets from "../data/data";


  const getTickets = () => new Promise((resolve, reject) => {
    if (!tickets) {
      return setTimeout(
        () => reject(new Error('Tickets not found')),
        250
      );
    }

    setTimeout(() => resolve(tickets), 250);
  });

const getTicket = (idx) =>
  new Promise((resolve, reject) => {
    const ticket = tickets[idx];

    if (!ticket) {
      return setTimeout(
        () => reject(new Error('Ticket not found')),
        250
      );
    }

    setTimeout(() => resolve(tickets[idx]), 250);
  });

const createTicket = (data) =>
  new Promise((resolve, reject) => {
    if (!data.product || !data.type || !data.quantity || !data.unitPrice) {
      reject(new Error('Not all information provided'));
    }

    tickets.splice(tickets.length, 0, data);

    setTimeout(() => resolve(true), 250);
  });

const deleteticket = (idx) =>
  new Promise((resolve, reject) => {

    if (!tickets[idx]) {
      return setTimeout(
        () => reject(new Error('Ticket not found')),
        250
      );
    }

    tickets.splice(idx, 1);

    return setTimeout(() => resolve(true), 250);
  });

export {getTickets, getTicket, createTicket, deleteticket};