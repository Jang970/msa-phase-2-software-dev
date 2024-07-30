import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Item from "./Item";
import Quantity from "./Quantity";

const ProductTable: React.FC = () => {
  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Item</TableCell>
          <TableCell align="center">Price</TableCell>
          <TableCell align="center">Quantity</TableCell>
          <TableCell align="center">Total</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>
            <Item />
          </TableCell>
          <TableCell align="center">$69.00</TableCell>
          <TableCell>
            <Quantity />
          </TableCell>
          <TableCell align="center">$69.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Item />
          </TableCell>
          <TableCell align="center">$69.00</TableCell>
          <TableCell>
            <Quantity />
          </TableCell>
          <TableCell align="center">$69.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Item />
          </TableCell>
          <TableCell align="center">$69.00</TableCell>
          <TableCell>
            <Quantity />
          </TableCell>
          <TableCell align="center">$69.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Item />
          </TableCell>
          <TableCell align="center">$69.00</TableCell>
          <TableCell>
            <Quantity />
          </TableCell>
          <TableCell align="center">$69.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ProductTable;
