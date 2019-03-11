enum Statuses {
  Pending = 1,
  Approved = 2,
  Rejected = 3
}

interface Order {
  statues: Statuses;
}
