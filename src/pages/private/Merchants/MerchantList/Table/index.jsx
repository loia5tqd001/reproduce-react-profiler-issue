import React from 'react';
import { Table } from 'antd';
import { columns } from './columns';
import ConfirmDecisionModal from './ConfirmDecisionModal';
import RepresentativeModal from './RepresentativeModal';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { representativeModalState, merchantsAfterFiltersSelector } from '../../states';
import WithRecoilFetching from '../../../../../components/WithRecoilFetching';

function Index(props) {
  const setRepresentativeModal = useSetRecoilState(representativeModalState);
  const merchants = useRecoilValue(merchantsAfterFiltersSelector);

  return (
    <>
      <Table
        columns={columns({ setRepresentativeModal })}
        dataSource={merchants}
        pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: [5, 10, 20] }}
        scroll={{ x: 1600 }}
        locale={{ emptyText: 'Không tìm thấy đối tác phù hợp' }}
      />
      <ConfirmDecisionModal />
      <RepresentativeModal />
    </>
  );
}

export default React.memo(WithRecoilFetching(Index, 500));
