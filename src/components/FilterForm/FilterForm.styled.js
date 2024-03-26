import { Field, Form } from "formik";
import styled from "styled-components";

export const StyledForm = styled(Form)`
    display: flex;
    justify-content: center;
    gap: 18px;
    margin-top: 50px;
`;

export const BrandForm = styled.div`
    display: flex;
    flex-direction: column;

    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    color: #8a8a89;
`;

export const PriceForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 125px;

    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    color: #8a8a89;
`;

export const MileageForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;
    height: 74px;

    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    color: #8a8a89;
`;

export const MileageFilds = styled.div`
    display: inline-block;
`;

export const StyledField = styled(Field)`
    border-radius: 14px;
    border: 0;
    margin-top: 8px;
    padding: 14px 89px 14px 18px;
    height: 48px;
    background: #f7f7fb;
`;

export const PriceField = styled(Field)`
    border-radius: 14px;
    border: 0;
    margin-top: 8px;
    padding: 14px 89px 14px 18px;
    width: 125px;
    height: 48px;
    background: #f7f7fb;
`;

export const FilterButton = styled.button`
    align-self: flex-end;
    border-radius: 12px;
    border: 0;
    padding: 14px 44px;
    width: 136px;
    height: 48px;
    background: #3470ff;
    cursor: pointer;

    font-size: 14px;
    line-height: 143%;
    color: #fff;

    &:hover{background-color: #0B44CD;}
`;