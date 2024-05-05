import { TestBed } from "@angular/core/testing"
import { fetchDataSerie } from "./data.service"


describe('fetchData', () => {
    let service : fetchDataSerie

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(fetchDataSerie);
    })

    it('should be created', () => {
        expect(service).toBeTruthy();
    })
})

