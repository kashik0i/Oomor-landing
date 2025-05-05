import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search, Filter, ArrowUp, ArrowDown, Menu } from 'lucide-react';
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell
} from "../ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "../ui/pagination";

interface Column {
  key: string;
  header: string;
  sortable?: boolean;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  title: string;
  pageSize?: number;
  searchable?: boolean;
  actionComponent?: (item: any) => React.ReactNode;
}

export const DataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  title,
  pageSize = 10,
  searchable = true,
  actionComponent
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{key: string, direction: 'asc' | 'desc'} | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the standard md breakpoint in Tailwind
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Filtering data based on search term
  const filteredData = searchTerm
    ? data.filter(item =>
        Object.values(item).some(val =>
          String(val).toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : data;

  // Sorting logic
  const sortedData = React.useMemo(() => {
    let sortableData = [...filteredData];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [filteredData, sortConfig]);

  // Pagination logic
  const totalPages = Math.ceil(sortedData.length / pageSize);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Render mobile card view
  const renderMobileView = () => {
    return (
      <div className="space-y-4 px-4">
        {paginatedData.length > 0 ? (
          paginatedData.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-4 space-y-3">
                {columns.map((column) => (
                  <div key={column.key} className="flex justify-between items-start border-b pb-2 last:border-b-0 last:pb-0">
                    <span className="font-medium text-sm text-gray-500">{column.header}:</span>
                    <span className="text-right text-sm">{item[column.key]}</span>
                  </div>
                ))}
                {actionComponent && (
                  <div className="pt-2 flex justify-end">
                    {actionComponent(item)}
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        ) : (
          <Card className="overflow-hidden">
            <CardContent className="p-4 text-center">
              No data found
            </CardContent>
          </Card>
        )}
      </div>
    );
  };

  // Render desktop table view
  const renderTableView = () => {
    return (
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.key}>
                  <div className="flex items-center">
                    {column.header}
                    {column.sortable && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="ml-2 h-4 w-4"
                        onClick={() => handleSort(column.key)}
                      >
                        {sortConfig?.key === column.key ? (
                          sortConfig.direction === 'asc' ? (
                            <ArrowUp className="h-4 w-4" />
                          ) : (
                            <ArrowDown className="h-4 w-4" />
                          )
                        ) : (
                          <div className="h-4 w-4 opacity-30">⇅</div>
                        )}
                      </Button>
                    )}
                  </div>
                </TableHead>
              ))}
              {actionComponent && <TableHead className="text-right">Actions</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item, index) => (
                <TableRow key={index}>
                  {columns.map((column) => (
                    <TableCell key={column.key}>
                      {item[column.key]}
                    </TableCell>
                  ))}
                  {actionComponent && (
                    <TableCell className="text-right">
                      {actionComponent(item)}
                    </TableCell>
                  )}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length + (actionComponent ? 1 : 0)}
                  className="text-center"
                >
                  No data found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    );
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-6 border-b">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

          {searchable && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 z-10" />
              <Input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-0">
        {isMobile ? renderMobileView() : renderTableView()}
      </CardContent>

      {totalPages > 1 && (
        <CardFooter className="px-6 py-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
          {!isMobile && (
            <div className="text-sm text-gray-500">
              Showing {Math.min(((currentPage - 1) * pageSize) + 1, sortedData.length)} to {Math.min(currentPage * pageSize, sortedData.length)} of {sortedData.length} entries
            </div>
          )}

          {isMobile && (
            <div className="text-sm text-gray-500 text-center">
              Page {currentPage} of {totalPages}
            </div>
          )}

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              </PaginationItem>

              {!isMobile && [...Array(Math.min(5, totalPages))].map((_, i) => {
                // Logic to show correct page numbers when there are many pages
                let pageNumber;
                if (totalPages <= 5) {
                  pageNumber = i + 1;
                } else if (currentPage <= 3) {
                  pageNumber = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNumber = totalPages - 4 + i;
                } else {
                  pageNumber = currentPage - 2 + i;
                }

                return (
                  <PaginationItem key={i}>
                    <PaginationLink
                      onClick={() => setCurrentPage(pageNumber)}
                      isActive={currentPage === pageNumber}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              <PaginationItem>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardFooter>
      )}
    </Card>
  );
};
