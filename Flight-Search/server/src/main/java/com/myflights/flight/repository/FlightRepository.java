package com.myflights.flight.repository;


import org.springframework.data.jpa.repository.JpaRepository;


import com.myflights.flight.entity.Flight;

import java.util.List;

public interface FlightRepository extends JpaRepository<Flight, Integer>{

    List<Flight> findByOriginAndDepartureDate(String origin,String dest,String departureDate);
    List<Flight> findByDepartureDataBetween(String startDate,String endDate);
    List<Flight> findByOriginAndDest(String origin, String dest);
    Flight findByFlid(int flid);
}
